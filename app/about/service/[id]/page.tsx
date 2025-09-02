import React from 'react'

interface PageProps {
  params: {
    id: string;
  };
}

async function page({ params }: PageProps) {
  const id = params.id;
  return (
    <div>dynamic page {id}</div>
  )
}

export default page