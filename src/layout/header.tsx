import Button from '@mui/material/Button';

interface GreetingProps {
  name: string
};

function Greeting({ name }: GreetingProps) {
  return <Button variant="contained">Hello {name}!</Button>
}

export default Greeting;
