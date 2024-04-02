import { Icon, Label, SemanticICONS } from 'semantic-ui-react';

type Tags = {
  label: string;
  icon: SemanticICONS;
};

export function TableTag(props: { data: string }) {
  const key = props.data as keyof typeof tags;
  const tags = {
    appointment: { label: 'Appointment', icon: 'stethoscope' } as Tags,
    laboratory: { label: 'Laboratory', icon: 'lab' } as Tags,
    'image-diagnostic': { label: 'Image Diagnostic', icon: 'dna' } as Tags,
  };

  return (
    <Label>
      <Icon name={tags[key]?.icon}></Icon>
      {tags[key]?.label}
    </Label>
  );
}
