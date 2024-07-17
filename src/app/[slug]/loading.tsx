import { Container, Skeleton } from '@mantine/core';

export default function Loading() {
  return (
    <>
      <Skeleton height={200} radius={0}/>
      <Container mt={"xl"}>
        <Skeleton height={32} width="50%" />
        <Skeleton height={16} mt={6} width="80%" />
        <Skeleton height={16} mt={6} width="70%" />
        <Skeleton height={16} mt={6} width="90%" />
        <Skeleton height={16} mt={6} width="60%" />
        <Skeleton height={16} mt={32} width="90%" />
        <Skeleton height={16} mt={6} width="70%" />
        <Skeleton height={16} mt={6} width="90%" />
        <Skeleton height={16} mt={6} width="40%" />
      </Container>
    </>
  );
}