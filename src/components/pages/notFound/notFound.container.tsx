import NotFoundView from './notFound.view';

type NotFoundContainerProps = {
  default: boolean
}

const NotFoundContainer = (props: NotFoundContainerProps) => {
  return (
    <NotFoundView />
  );
};

export default NotFoundContainer;