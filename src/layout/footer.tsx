import Button from '@mui/material/Button';

interface FooterProps {
  name: string
};

function Footer({ name }: FooterProps) {
  return <Button variant="contained">Hello {name}!</Button>
}

export default Footer;
