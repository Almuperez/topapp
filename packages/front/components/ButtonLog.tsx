import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Button from "@mui/material/Button";
import ParentForm from "./form/ParentForm";
import { Heading } from "@chakra-ui/react";

const ButtonNav = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <Heading margin="40" as="h4" size="md" color="grey">
        Soy padre y busco conciliar
      </Heading>
      {!user && (
        <a
          style={{ margin: "5px" }}
          href="/api/auth/login"
          className="btn btn-primary"
        >
          Login
        </a>
      )}

      {user && (
        <>
          <ParentForm />
          <div>
            <a
              style={{ margin: "5px" }}
              href="/child"
              className="btn btn-outline-info"
            >
              Rellenar formulario hijo
            </a>
          </div>
        </>
      )}
    </div>
  );
};
export default ButtonNav;

// const IndexPage = () => (
//   <StyleDiv>
//     <Card border="info" style={{ width: "40rem" }}>
//       <Heading margin="40" as="h4" size="md" color="grey">
//         Bienvenido a Topapp, te ayudamos a conciliar
//       </Heading>

//       <Stack margin="40" direction="row" spacing={50} align="center">
//         <Button borderRadius="md" variant="info" bg="pink" color="white">
//           <Link href="/padres"> Soy padre </Link>
//         </Button>
//         <Button borderRadius="md" variant="info" bg="white" color="white">
//           <Link href="/nanny">Soy nanny</Link>
//         </Button>
//         <Button borderRadius="md" bg="white" color="white">
//           <Link href="/guarderia">Soy guardería</Link>
//         </Button>
//       </Stack>
//     </Card>
//   </StyleDiv>
// );

// export default IndexPage;
