/* eslint-disable prettier/prettier */
import { ShowWeekHeader2, TableSW2 } from '../components/tables/TableStyles';

const ShowSprint = () => {
    const headers = ['Previous Sprints'];

    const buildHeaders = () =>
        headers.map((header, index) => (
            <ShowWeekHeader2 isFirst={index === 0} isLast={index === headers.length - 1}>
                {header}
            </ShowWeekHeader2>
        ));

    return (
        <>
            {/* <TableTag backgroundColor={colors.themeTertiary}>
                {buildTag()}
            </TableTag> */}
            <TableSW2 proportions={[1]}>
                {buildHeaders()}
            </TableSW2>
        </>
    );
};
export default ShowSprint;