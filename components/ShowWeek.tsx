/* eslint-disable prettier/prettier */
import { ShowWeekHeader, Table } from '../components/tables/TableStyles';

const ShowWeek = () => {
    const headers = ['04/09 - 08/09'];

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
            <Table proportions={[1]}>
                {buildHeaders()}
            </Table>
        </>
    );
};
export default ShowWeek;