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
 
export function LoginModal({isOpen, handler}) {

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
        <Card className="mx-auto w-full max-w-[24rem] bg-opacity-40 bg-teal-200">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          
          <CardFooter className="pt-0">
            <Button variant="" onClick={handler} fullWidth
            className="
            bg-teal-100
            border-blue-600 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
              Sign In
            </Button>
            <Typography className="justify-center pt"variant="h6">OR</Typography>
            <div className="">
            <GoogleSignin /> {/* Google Sign-In Button */}
          </div>
            
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}