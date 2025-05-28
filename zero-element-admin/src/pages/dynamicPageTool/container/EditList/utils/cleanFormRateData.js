
export default (formData, field) => {

    if(formData.formViewType != 'one-mary'){
        formData.fieldViewOneManyOptions = ''
    }

    return formData
}