import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.id || params.id.length === 0) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <h1>Room</h1>

      <p>{params.id}</p>
    </div>
  );
}
