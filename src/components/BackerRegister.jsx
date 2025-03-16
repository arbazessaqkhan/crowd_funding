import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import GoogleSignin from "./GoogleSignin";
 
export function FundraiserRegister({isOpen, handler}) {

  if (isOpen === undefined || handler === undefined) {
    console.error("LoginModal is missing required props: isOpen or handler");
    return null; // Prevents rendering if props are missing
  }
 
  return (
    <>
      <Dialog
        size="xs"
        open={isOpen}
        handler={handler}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[30rem] bg-opacity-40 bg-teal-200">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Start a Fundraiser
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Let us know more about your fundraiser.
            </Typography>
            <div className="grid 
            grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Typography className="mb-2" variant="h6">
                  Name
                </Typography>
                <Input label="Name" size="lg" />
              </div>

              <div>
                <Typography className="mb-2" variant="h6">
                  Phone Number
                </Typography>
                <Input label="Phone Number" size="lg" />
              </div>
            </div>

            <div className="grid 
            grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Typography className="mb-2" variant="h6">
                  Email
                </Typography>
                <Input label="Email" size="lg" />
              </div>

              <div>
                <Typography className="mb-2" variant="h6">
                  Password
                </Typography>
                <Input label="Password" size="lg" />
              </div>
            </div>
          </CardBody>
          
          <CardFooter className="pt-0">
            <Button variant="" onClick={handler} fullWidth
            className="
            bg-teal-100
            border-blue-600 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
              Sign Up as a Fundraiser
            </Button>
          
            
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}