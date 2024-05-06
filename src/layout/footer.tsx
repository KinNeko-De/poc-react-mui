import Button from '@mui/material/Button';

type Props = {
  name: string
};

function Footer({ name }: Props) {
  return <Button variant="contained">Hello {name}!</Button>
}

export default Footer;
