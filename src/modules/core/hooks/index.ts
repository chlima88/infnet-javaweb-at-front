import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Schedule } from 'modules/core/types';

export function useFetchData<T = any | any[]>(fetcher: () => any) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const responseData = await fetcher();
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, fetchData, isLoading };
}

export function useViewDelete(fetcher: () => Promise<Response>, redirectTo?: string) {
  const [isLoading, setIsLoading] = useState<boolean | undefined>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleClickDelete(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetcher();
      if (res.status != 204) {
        setError(true);
        setSuccess(false);
      } else {
        setError(false);
        setSuccess(true);
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
    } finally {
      setIsLoading(false);
      if (redirectTo)
        setTimeout(async () => {
          navigate(redirectTo);
        }, 2000);
    }
  }
  return { success, error, isLoading, setIsLoading, handleClickDelete };
}

export function useRegistrySubmit(formData: any, fetcher: (data: any) => Promise<Response>) {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: SyntheticEvent): Promise<void> {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetcher(formData);
      if (res.status != 200) {
        const error = await res.json().then((json) => json.data.message);
        error && setErrorMsg(error);
        setError(true);
        setSuccess(false);
      } else {
        setError(false);
        setSuccess(true);
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return { success, setSuccess, error, setError, errorMsg, isLoading, setIsLoading, handleSubmit };
}

export function useViewData<T = any>(
  fetchFn: (id: string) => Promise<any>,
  deleteFn: (id: string) => Promise<Response>,
  navigateRoute: string,
) {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useFetchData<T>(() => fetchFn(id!));
  const { success, error, isLoading, handleClickDelete } = useViewDelete(() => deleteFn(id!));

  function handleClick(event: SyntheticEvent): void {
    event.preventDefault();
    navigate(navigateRoute);
  }

  return { data, success, error, isLoading, handleClickDelete, handleClick };
}

export function useScheduleListData(fetcher: () => Promise<Response>) {
  const { data, isLoading } = useFetchData<Schedule[]>(fetcher);
  const schedules = data?.map((schedule: Schedule) => {
    schedule.confirmed = schedule.confirmed ? 'Yes' : 'No';
    return schedule;
  })!;
  const tableHeaders = [
    { label: 'ID', key: 'scheduleId', tag: false },
    { label: 'Date and Time', key: 'datetime', tag: false },
    { label: 'Type', key: 'type', tag: false },
    { label: 'Patient', key: ['patient', 'name'], tag: true },
    { label: 'Doctor', key: ['doctor', 'name'], tag: true },
    { label: 'Medical Care', key: ['medicalCare', 'name'], tag: true },
    { label: 'Confirmed', key: 'confirmed', tag: false },
  ];

  return { schedules, tableHeaders, isLoading };
}
