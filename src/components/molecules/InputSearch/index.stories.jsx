import InputSearch from './index';

export default {
  title: 'Example/InputSearch',
  component: InputSearch,
};

const Template = (args) => <InputSearch 
                            {...args}
                           />;

export const Default = Template.bind({});



Default.args = {
    onClikClose:()=> alert('clear input'),
    value:"dfdfdf",
    onClick : ()=> console.log('click'),
    referencia:null,
    onChange :(e) => console.log(e.target.value) 
};

