import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import CreaTuPastel from "../page";

export default function ProgressSabor() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={8}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 3000, flexGrow: 1 }}
      nextButton={
        <Link href={"/Categorias/CreaTuPastel/Diseno"}>
          <Button size="large" onClick={handleNext} disabled={activeStep === 6}>
            Diseño
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </Link>
      }
      backButton={
        <Link href={"/Categorias/CreaTuPastel/Tamano"}>
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Tamaño
          </Button>
        </Link>
      }
    />
  );
}
