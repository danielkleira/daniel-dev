import { CardProvider } from "./Cards";
import { HeaderProvider } from "./Head";

const Providers = ({ children }) => {
  return (
    <HeaderProvider>
      <CardProvider>{children}</CardProvider>
    </HeaderProvider>
  );
};

export default Providers;
