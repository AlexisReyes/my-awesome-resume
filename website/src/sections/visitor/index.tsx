import React from "react";
import getVisitorCount from "./data";
import { Animation } from "gatsby-theme-portfolio-minimal";
import { Section } from "gatsby-theme-portfolio-minimal";
import { PageSection } from "gatsby-theme-portfolio-minimal";

export default function VisitorCounterSection(props: PageSection): React.ReactElement {
    const response = getVisitorCount();

    return (
        <div>Visitante numero {response}</div>
    );
}
