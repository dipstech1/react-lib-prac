import { ChangeEvent, HTMLProps } from "react";

interface ISelectListOptions {
    label: string;
    value: string
}

interface ISelectProps extends HTMLProps<HTMLSelectElement> {
    selectList: ISelectListOptions[],
    onChange : (event: ChangeEvent<HTMLSelectElement>) => void 
}

export const Select = (props: ISelectProps) => {
    return (
        <div>
            <select name="cars" id="cars" onChange={props.onChange} value={props.value}>
                <option value={''}>Select</option>
                {
                    props.selectList?.map((data,ind) => (
                        <option key={ind} value={data?.value} > {data?.label}</option>
                    ))
                }
            </select>
        </div>
    )
}
