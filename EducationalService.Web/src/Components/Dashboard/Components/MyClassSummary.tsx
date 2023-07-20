import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { ClassroomListDomain } from "../../../Models/Domain/ClassroomListDomain";
import { SxT, centerLeftProps, centerProps } from "../../../Utils/CssProps";
import { Palette } from "../../../Utils/Palette";
import { FontSize } from "../../../Utils/Font";

export type MyClassSummaryProps = {
    classrooms: ClassroomListDomain[],
    padding: number,
}

const MyClassSummary = ({ props }: { props: MyClassSummaryProps }) => {
    const { classrooms, padding } = props;
    const outerSx: SxT = {
        padding,
        paddingTop: 1,
        paddingBottom: 1,
    }
    const itemSx: SxT = {
        ...centerProps
    }
    const cardSx: SxT = {
        width: "98%",
        height: "90%"
    }
    const buttonSx: SxT = {
        color: Palette.DarkBlue,
        width: "100%",
        textTransform: 'none',
        paddingLeft: 3,
        paddingRight: 3,
    }
    const innerGridSx: SxT = {
        height: 120,
        ...centerProps,
    }
    const innerGridItemSx: SxT = {
        width: "100%",
        ...centerLeftProps,
    }
    return (
        <Grid container sx={outerSx}>
            {classrooms.map((classroom, i) => {
                return (
                    <Grid item xs={6} sx={itemSx}>
                        <Card sx={cardSx}>
                            <Button key={i} sx={buttonSx}>
                                <Grid container sx={innerGridSx}>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={4} sx={innerGridItemSx}>
                                        <Typography fontSize={FontSize.middle}>
                                            {classroom.Name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sx={innerGridItemSx}>
                                        <Stack>
                                            <Typography fontSize={FontSize.middleSmall}>
                                                Student: { classroom.StudentCount }
                                            </Typography>
                                            <Typography fontSize={FontSize.middleSmall}>
                                                Today's Attendance: { classroom.TodaysAttendance }
                                            </Typography>
                                            <Typography fontSize={FontSize.middleSmall}>
                                                Current Subject: { classroom.CurrentClassroom }
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={2} sx={innerGridItemSx}>
                                        <Typography fontSize={FontSize.small}>
                                            Updated
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Button>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}


export default MyClassSummary;