/* eslint-disable prettier/prettier */
import { ShowWeekHeader, TableSW } from '../components/tables/TableStyles';

const ShowSprint = () => {
    const headers = ['Current Sprint'];

    const buildHeaders = () =>
        headers.map((header, index) => (
            <ShowWeekHeader isFirst={index === 0} isLast={index === headers.length - 1}>
                {header}
            </ShowWeekHeader>
        ));

    return (
        <>
            {/* <TableTag backgroundColor={colors.themeTertiary}>
                {buildTag()}
            </TableTag> */}
            <TableSW proportions={[1]}>
                {buildHeaders()}
            </TableSW>
        </>
    );
};
export default ShowSprint;