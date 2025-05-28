
import { set as LayoutSet } from 'zero-element/lib/config/layout';
import { set as CSet } from 'zero-element/lib/config/container';
import { set as LASet } from 'zero-element/lib/config/listAction';
import { set as FITSet } from 'zero-element/lib/config/formItemType';
import { set as AITSet } from 'zero-element/lib/config/actionItemType';
import { set as VTSet } from 'zero-element/lib/config/valueType';

  import LayoutSet_Empty from '@/../zero-antd-dep/layout/Empty';
import LayoutSet_Title from '@/../zero-antd-dep/layout/Title';
import LayoutSet_BaseTitle from '@/../zero-antd-dep/layout/BaseTitle';
import LayoutSet_NotTitleContent from '@/../zero-antd-dep/layout/NotTitleContent';
import LayoutSet_TitleContent from '@/../zero-antd-dep/layout/TitleContent';
import LayoutSet_Loading from '@/../zero-antd-dep/layout/Loading';
import LayoutSet_Alone from '@/../zero-antd-dep/layout/Alone';
import LayoutSet_Row from '@/../zero-antd-dep/layout/Row';
import LayoutSet_MoreSearchLayout from '@/../zero-antd-dep/layout/MoreSearchLayout';
import LayoutSet_SearchLayout from '@/../zero-antd-dep/layout/SearchLayout';
import LayoutSet_Grid from '@/../zero-antd-dep/layout/Grid';
import LayoutSet_Content from '@/../zero-antd-dep/layout/Content';
import LayoutSet_Items from '@/../zero-antd-dep/layout/Items';
import CSet_Empty from '@/../zero-antd-dep/container/Empty';
import CSet_Table from '@/../zero-antd-dep/container/List/Table';
import CSet_ReportTable from '@/../zero-antd-dep/container/List/ReportTable';
import CSet_TreeTable from '@/../zero-antd-dep/container/List/TreeTable';
import CSet_ChildrenTable from '@/../zero-antd-dep/container/List/ChildrenTable';
import CSet_TreeList from '@/../zero-antd-dep/container/List/TreeList';
import CSet_AutoReport from '@/../zero-antd-dep/container/List/AutoReport';
import CSet_TableSelect from '@/../zero-antd-dep/container/List/TableSelect';
import CSet_ItemList from '@/../zero-antd-dep/container/List/ItemList';
import CSet_Search from '@/../zero-antd-dep/container/Form/Search';
import CSet_MoreSearch from '@/../zero-antd-dep/container/Form/MoreSearch';
import CSet_AutoReportSearch from '@/../zero-antd-dep/container/Form/AutoReportSearch';
import CSet_Form from '@/../zero-antd-dep/container/Form/Form';
import CSet_ChildrenForm from '@/../zero-antd-dep/container/Form/ChildrenForm';
import LASet_onRequest from '@/../zero-antd-dep/listAction/onRequest';
import LASet_onTips from '@/../zero-antd-dep/listAction/onTips';
import LASet_onPath from '@/../zero-antd-dep/listAction/onPath';
import FITSet_switch from '@/../zero-antd-dep/formItemType/switch';
import FITSet_avatars from '@/../zero-antd-dep/formItemType/Avatars/Avatars';
import FITSet_videoview from '@/../zero-antd-dep/formItemType/VideoView/VideoView';
import FITSet_Space from '@/../zero-antd-dep/formItemType/Space';
import FITSet_plain from '@/../zero-antd-dep/formItemType/Plain';
import FITSet_image from '@/../zero-antd-dep/formItemType/Image';
import FITSet_empty from '@/../zero-antd-dep/formItemType/Empty';
import FITSet_hidden from '@/../zero-antd-dep/formItemType/Hidden';
import FITSet_group from '@/../zero-antd-dep/formItemType/Group';
import FITSet_input from '@/../zero-antd-dep/formItemType/Input';
import FITSet_search from '@/../zero-antd-dep/formItemType/Search';
import FITSet_inputType from '@/../zero-antd-dep/formItemType/InputType';
import FITSet_password from '@/../zero-antd-dep/formItemType/Password';
import FITSet_number from '@/../zero-antd-dep/formItemType/Number';
import FITSet_radio from '@/../zero-antd-dep/formItemType/Radio';
import FITSet_select from '@/../zero-antd-dep/formItemType/Select';
import FITSet_checkbox from '@/../zero-antd-dep/formItemType/Checkbox';
import FITSet_map from '@/../zero-antd-dep/formItemType/Map';
import FITSet_pcd from '@/../zero-antd-dep/formItemType/PCD';
import FITSet_captcha from '@/../zero-antd-dep/formItemType/Captcha';
import FITSet_tags from '@/../zero-antd-dep/formItemType/Tags';
import FITSet_download from '@/../zero-antd-dep/formItemType/Download';
import FITSet_json from '@/../zero-antd-dep/formItemType/JSON';
import FITSet_date from '@/../zero-antd-dep/formItemType/Date/date';
import FITSet_week from '@/../zero-antd-dep/formItemType/Date/week';
import FITSet_month from '@/../zero-antd-dep/formItemType/Date/month';
import FITSet_range from '@/../zero-antd-dep/formItemType/Date/range';
import FITSet_directUpload from '@/../zero-antd-dep/formItemType/DirectUpload';
import FITSet_timeRange from '@/../zero-antd-dep/formItemType/Time/TimeRange';
import FITSet_tableSelect from '@/../zero-antd-dep/formItemType/TableSelect';
import FITSet_modalRadio from '@/../zero-antd-dep/formItemType/ModalRadio';
import FITSet_modalCheckbox from '@/../zero-antd-dep/formItemType/ModalCheckbox';
import FITSet_uploadImage from '@/../zero-antd-dep/formItemType/UploadImage';
import FITSet_uploadFile from '@/../zero-antd-dep/formItemType/UploadFile';
import FITSet_checkboxFetch from '@/../zero-antd-dep/formItemType/CheckboxFetch';
import FITSet_selectFetch from '@/../zero-antd-dep/formItemType/SelectFetch';
import FITSet_selectFetchVal from '@/../zero-antd-dep/formItemType/SelectFetchVal';
import FITSet_selectField from '@/../zero-antd-dep/formItemType/SelectField';
import FITSet_textArea from '@/../zero-antd-dep/formItemType/TextArea';
import FITSet_richText from '@/../zero-antd-dep/formItemType/RichText';
import FITSet_oneMary from '@/../zero-antd-dep/formItemType/OneMary';
import FITSet_numberRange from '@/../zero-antd-dep/formItemType/NumberRange';
import FITSet_pcdm from '@/../zero-antd-dep/formItemType/PCDM';
import FITSet_pcdForSearch from '@/../zero-antd-dep/formItemType/PCDForSearch';
import FITSet_toptips from '@/../zero-antd-dep/formItemType/Toptips';
import FITSet_imageBox from '@/../zero-antd-dep/formItemType/ImageBox';
import FITSet_path from '@/../zero-antd-dep/formItemType/path';
import FITSet_TimeSelect from '@/../zero-antd-dep/formItemType/TimeSelect';
import FITSet_linkButton from '@/../zero-antd-dep/formItemType/LinkButton';
import FITSet_richTextPlain from '@/../zero-antd-dep/formItemType/RichTextPlain';
import AITSet_modal from '@/../zero-antd-dep/actionItemType/Modal';
import AITSet_request from '@/../zero-antd-dep/actionItemType/Request';
import AITSet_childrenModalAdd from '@/../zero-antd-dep/actionItemType/ChildrenModalAdd';
import AITSet_import from '@/../zero-antd-dep/actionItemType/Import';
import AITSet_importModal from '@/../zero-antd-dep/actionItemType/ImportModal';
import AITSet_export from '@/../zero-antd-dep/actionItemType/Export';
import AITSet_tableCheckbox from '@/../zero-antd-dep/actionItemType/TableCheckbox';
import VTSet_index from '@/../zero-antd-dep/valueType/index';
import VTSet_video from '@/../zero-antd-dep/valueType/Video';
import VTSet_plain from '@/../zero-antd-dep/valueType/plain';
import VTSet_join from '@/../zero-antd-dep/valueType/join';
import VTSet_map from '@/../zero-antd-dep/valueType/map';
import VTSet_image from '@/../zero-antd-dep/valueType/image';
import VTSet_thumb from '@/../zero-antd-dep/valueType/thumb';
import VTSet_tag from '@/../zero-antd-dep/valueType/tag';
import VTSet_dot from '@/../zero-antd-dep/valueType/dot';
import VTSet_currency from '@/../zero-antd-dep/valueType/currency';
import VTSet_percentage from '@/../zero-antd-dep/valueType/percentage';
import VTSet_url from '@/../zero-antd-dep/valueType/url';
import VTSet_download from '@/../zero-antd-dep/valueType/download';
import VTSet_ellipsis from '@/../zero-antd-dep/valueType/ellipsis';
import VTSet_complex from '@/../zero-antd-dep/valueType/complex';
import VTSet_countDown from '@/../zero-antd-dep/valueType/countDown';
import VTSet_inputNumber from '@/../zero-antd-dep/valueType/inputNumber';
import VTSet_inputText from '@/../zero-antd-dep/valueType/inputText';
import VTSet_inputSelect from '@/../zero-antd-dep/valueType/inputSelect';
import VTSet_inputSelectFetch from '@/../zero-antd-dep/valueType/inputSelectFetch';
import VTSet_timeConvert from '@/../zero-antd-dep/valueType/timeConvert';

LayoutSet({
'Empty': LayoutSet_Empty,
'Title': LayoutSet_Title,
'BaseTitle': LayoutSet_BaseTitle,
'NotTitleContent': LayoutSet_NotTitleContent,
'TitleContent': LayoutSet_TitleContent,
'Loading': LayoutSet_Loading,
'Alone': LayoutSet_Alone,
'Row': LayoutSet_Row,
'MoreSearchLayout': LayoutSet_MoreSearchLayout,
'SearchLayout': LayoutSet_SearchLayout,
'Grid': LayoutSet_Grid,
'Content': LayoutSet_Content,
'Items': LayoutSet_Items,

});

CSet({
'Empty': CSet_Empty,
'Table': CSet_Table,
'ReportTable': CSet_ReportTable,
'TreeTable': CSet_TreeTable,
'ChildrenTable': CSet_ChildrenTable,
'TreeList': CSet_TreeList,
'AutoReport': CSet_AutoReport,
'TableSelect': CSet_TableSelect,
'ItemList': CSet_ItemList,
'Search': CSet_Search,
'MoreSearch': CSet_MoreSearch,
'AutoReportSearch': CSet_AutoReportSearch,
'Form': CSet_Form,
'ChildrenForm': CSet_ChildrenForm,

});

LASet({
'onRequest': LASet_onRequest,
'onTips': LASet_onTips,
'onPath': LASet_onPath,

});

FITSet({
'switch': FITSet_switch,
'avatars': FITSet_avatars,
'videoview': FITSet_videoview,
'Space': FITSet_Space,
'plain': FITSet_plain,
'image': FITSet_image,
'empty': FITSet_empty,
'hidden': FITSet_hidden,
'group': FITSet_group,
'input': FITSet_input,
'search': FITSet_search,
'inputType': FITSet_inputType,
'password': FITSet_password,
'number': FITSet_number,
'radio': FITSet_radio,
'select': FITSet_select,
'checkbox': FITSet_checkbox,
'map': FITSet_map,
'pcd': FITSet_pcd,
'captcha': FITSet_captcha,
'tags': FITSet_tags,
'download': FITSet_download,
'json': FITSet_json,
'date': FITSet_date,
'week': FITSet_week,
'month': FITSet_month,
'range': FITSet_range,
'direct-upload': FITSet_directUpload,
'time-range': FITSet_timeRange,
'table-select': FITSet_tableSelect,
'modal-radio': FITSet_modalRadio,
'modal-checkbox': FITSet_modalCheckbox,
'upload-image': FITSet_uploadImage,
'upload-file': FITSet_uploadFile,
'checkbox-fetch': FITSet_checkboxFetch,
'select-fetch': FITSet_selectFetch,
'select-fetch-val': FITSet_selectFetchVal,
'select-field': FITSet_selectField,
'text-area': FITSet_textArea,
'rich-text': FITSet_richText,
'one-mary': FITSet_oneMary,
'number-range': FITSet_numberRange,
'pcdm': FITSet_pcdm,
'pcdForSearch': FITSet_pcdForSearch,
'toptips': FITSet_toptips,
'imageBox': FITSet_imageBox,
'path': FITSet_path,
'TimeSelect': FITSet_TimeSelect,
'link-button': FITSet_linkButton,
'rich-text-plain': FITSet_richTextPlain,

});

AITSet({
'modal': AITSet_modal,
'request': AITSet_request,
'children-modal-add': AITSet_childrenModalAdd,
'import': AITSet_import,
'import-modal': AITSet_importModal,
'export': AITSet_export,
'table-checkbox': AITSet_tableCheckbox,

});

VTSet({
'index': VTSet_index,
'video': VTSet_video,
'plain': VTSet_plain,
'join': VTSet_join,
'map': VTSet_map,
'image': VTSet_image,
'thumb': VTSet_thumb,
'tag': VTSet_tag,
'dot': VTSet_dot,
'currency': VTSet_currency,
'percentage': VTSet_percentage,
'url': VTSet_url,
'download': VTSet_download,
'ellipsis': VTSet_ellipsis,
'complex': VTSet_complex,
'count-down': VTSet_countDown,
'input-number': VTSet_inputNumber,
'input-text': VTSet_inputText,
'input-select': VTSet_inputSelect,
'input-select-fetch': VTSet_inputSelectFetch,
'time-convert': VTSet_timeConvert,

});
