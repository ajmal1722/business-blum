import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";
import Header from "@/components/Shared/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container className="w-full">
        Hello world
        <Button>Apply now</Button>
      </Container>
    </>
  );
}
