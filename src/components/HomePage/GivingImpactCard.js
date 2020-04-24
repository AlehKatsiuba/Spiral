import React from "react";
import { Card, CardInfo, CardMedia, CardDescription, CardFooter } from "../Card";
import { Button } from "../Button";
import logo from '../../static/images/SpiralLogo.jpg'

export function GivingImpactCard({ backgroundImage, title, subtitle, description }) {
  return (
    <Card>
      <CardInfo
        image={logo}
        title={title}
        subtitle={subtitle}
      />
      <CardMedia
        image={backgroundImage}
      />
      <CardDescription>
        {description}
      </CardDescription>
      <CardFooter>
        <Button>Share to spread the world</Button>
      </CardFooter>
    </Card>
  );
};