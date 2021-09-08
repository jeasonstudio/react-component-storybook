import styled from 'styled-components';

const ComponentWrapper = styled.div`
  margin: 20px;
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

export interface IDemoComponentProps {
  name?: string;
  color?: string;
  onClick?: () => void;
}

/**
 * React Functional Component Demo. `Hello World`
 * @param props
 */
export const DemoComponent: React.FunctionComponent<IDemoComponentProps> = (
  props,
) => (
  <ComponentWrapper color={props.color} onClick={props.onClick}>
    Hello
    {props.name}
  </ComponentWrapper>
);

DemoComponent.displayName = 'DemoComponent';
