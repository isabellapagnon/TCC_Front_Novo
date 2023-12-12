/* eslint-disable prettier/prettier */
import { ShowWeekHeader, TableSW } from '../components/tables/TableStyles';

const ShowWeek = () => {
    const headers = ['09/04/23 - 09/08/23'];

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
export default ShowWeek;