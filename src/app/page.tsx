'use client';

import ImageHeader from "@/components/ImageHeader/ImageHeader";
import { Container } from "@mantine/core";

export default function Home() {
  return <>
    <ImageHeader src="/images/headers/sailing.jpg" alt="Sailing boat" />
    <Container>
      <h1>BSI Seiling</h1>
      <p>
        BSI Seiling is a non-profit sports organisation and a part of the BSI sports alliance.
      </p>
      <p>
        We were founded in 1997 and our goal is to promote sailing as a sport and leisure to students and other in the Bergen area, by arranging sailing courses and trips for our members. We currently have two Albin Express boats which are used for daily members sailings. We also have a 31 ft Albin Delta, used for both member sailings and longer trips and weekends. We are based in a quiet marina at Laksevåg, Merkur Boat Club.
      </p>
    </Container>
  </>;
}
