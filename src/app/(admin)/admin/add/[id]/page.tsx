import { useParams } from 'next/navigation';
import React from 'react';

export default function AddPage(): React.ReactElement {

    const params = useParams();
    const { id } = params;

  return (
    <div>AddPage {id}</div>
  );
}