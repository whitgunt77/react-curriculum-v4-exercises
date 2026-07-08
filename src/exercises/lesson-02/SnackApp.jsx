import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';

export default function SnackApp() {
  return (
    <div
      className="snack-app"
      style={{
        margin: '0 auto',
        maxWidth: '700px',
        padding: '1em',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
      }}
    >
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
