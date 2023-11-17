import{ ReactNode } from 'react';

type Props = {
    children?: ReactNode;
}
export const BodyModal = ({ children }: Props): JSX.Element => {
    return (
        <div className="bodyModal">
            { children }
        </div>
    )
}