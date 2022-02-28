import { Links } from "../../Data/info";
import { Container, Icon, Link, Text } from "./style";

const LinksSocial = () => {
  return (
    <Container>
      {Links.map(({ name, icon, url, userName }) => {
        return (
          <Link href={url} target="_blank">
            <div>
              <Icon src={icon} alt={name} />
              <Text>{name}</Text>
            </div>
            <Text>{userName}</Text>
          </Link>
        );
      })}
    </Container>
  );
};

export default LinksSocial;
