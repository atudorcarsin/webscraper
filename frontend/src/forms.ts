export function formDataToObject(formData: FormData) {
    const obj: {[key: string]: FormDataEntryValue} = {};
    formData.forEach((value: FormDataEntryValue, key: string) => {
        obj[key] = value;
    });
    return obj;
}