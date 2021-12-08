
import ButtonDefault  from './ButtonDefault';

export default {
  title: 'Example/ButtonDefault',
  component: ButtonDefault,
};

const Template = (args) => <ButtonDefault {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Inicio",
};
Secondary.args = {
  type:"secondary",
  label:"Hoy",
};


