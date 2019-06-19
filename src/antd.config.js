import Vue from 'vue';
import {
    Button, 
    Layout, 
    Menu, 
    Icon,
    Table, 
    Breadcrumb, 
    dropdown,
    Pagination,
    Steps,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TimePicker,
    Row,
    Col,
    Tag,
    Tabs,
    Timeline,
    Popover,
    Collapse,
    Alert,
    Message,
    Modal,
    Progress,
    Spin,
    BackTop,
    Popconfirm,
    Avatar,
    Comment,
    Carousel,
    Card,
    Calendar,
    Badge,
    Upload,
    AutoComplete,
    Affix,
    Transfer,
    TreeSelect,
    Drawer,
    List,
    Tooltip,
    Divider
} from 'ant-design-vue';

export default {
    init: function() {
        Vue.use(Button);
        Vue.use(Layout);
        Vue.use(Menu);
        Vue.use(Icon);
        Vue.use(Table);
        Vue.use(Breadcrumb);
        Vue.use(dropdown);

        Vue.use(Pagination);
        Vue.use(Steps);
        Vue.use(Cascader);
        Vue.use(Checkbox);
        Vue.use(DatePicker);
        Vue.use(Form);
        Vue.use(Input);

        Vue.use(InputNumber);
        Vue.use(Radio);
        Vue.use(Rate);
        Vue.use(Select);
        Vue.use(Slider);
        Vue.use(Switch);
        Vue.use(TimePicker);

        Vue.use(Row);
        Vue.use(Col);
        Vue.use(Tag);

        Vue.use(Tabs);
        Vue.use(Timeline);
        Vue.use(Popover);

        Vue.use(Collapse);
        Vue.use(Alert);
        Vue.use(Message);
        Vue.use(Modal);

        Vue.use(Progress);
        Vue.use(Spin);
        Vue.use(BackTop);
        Vue.use(Popconfirm);

        Vue.use(Avatar);
        Vue.use(Comment);
        Vue.use(Carousel);

        Vue.use(Card);
        Vue.use(Calendar);
        Vue.use(Badge);
        Vue.use(Upload);

        Vue.use(AutoComplete);

        Vue.use(Affix);
        Vue.use(Transfer);
        Vue.use(TreeSelect);
        Vue.use(Drawer);
        Vue.use(List);
        Vue.use(Tooltip);
        Vue.use(Divider);
    }
};