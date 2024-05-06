import Button from '@mui/material/Button';

type Props = {
  name: string
};

function Greeting({ name }: Props) {
  return <Button variant="contained">Hello {name}!</Button>
}

export default Greeting;
