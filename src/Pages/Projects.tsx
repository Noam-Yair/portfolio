import React, {useState} from "react";
import './Page.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import {ButtonGroup, DialogContent} from "@mui/material";
import imageUrl from '../images/wordle.jpg';
import portfolioUrl from '../images/portfolio.png'
import video from "../images/Wordle.mp4"

export default function Projects() {
    const [openVideo, setOpenVideo] = useState(false);

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    return (
        <section className="projects" style={{backgroundColor: "#e1f3f3"}}>
            <h1 className="projects">Projects</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={1} sm={2} md={3}/>
                <Grid item xs={5} sm={4} md={3} sx={{height: "80vh"}}>
            <Card sx={{ maxWidth: 345, height: 565 }}>
                <CardMedia
                    component="img"
                    sx={{ height: "55%", objectFit: "contain" }}
                    image={imageUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Wordle
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A full-stack project of the known Wordle game.
                        Backend Stack: Java, Spring, Postgres, Docker, Lombok, Jooq.
                        Frontend Stack: React, Typescript.
                    </Typography>
                </CardContent>
                <CardActions>
                    <ButtonGroup disableElevation variant="text" aria-label="text button group"
                    sx={{flexWrap: "nowrap",
                        flexDirection: "row"}}>
                    <a style={{textDecorationColor: "white",
                        textDecorationLine: "inherit"}}
                        href="https://github.com/Noam-Yair/Wordle"
                        target="_blank"
                        rel="noreferrer"
                    ><Button size="small">Frontend Source Code</Button></a>
                    <a style={{textDecorationColor: "white",
                        textDecorationLine: "inherit"}}
                       href="https://github.com/Noam-Yair/Wordle-Backend"
                       target="_blank"
                       rel="noreferrer"
                    ><Button size="small">Backend Source Code</Button></a>
                    </ButtonGroup>
                    <Button size="small" onClick={()=> setOpenVideo(true)}>Demo</Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={5} sm={4} md={3}>
                    <Card sx={{ maxWidth: 345, height: 565 }}>
                        <CardMedia
                            component="img"
                            sx={{ height: "55%", objectFit: "contain" }}
                            image={portfolioUrl}
                            alt="portfolio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Portfolio
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A frontend project to show my portfolio.
                                Frontend stack: React, typescript, material-ui.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a style={{textDecorationColor: "white",
                                textDecorationLine: "inherit"}}
                               href="https://github.com/Noam-Yair/Portfolio"
                               target="_blank"
                               rel="noreferrer"
                            ><Button size="small">Frontend Source Code</Button></a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={1} sm={2} md={3}/>
            </Grid>
            <BootstrapDialog
                onClose={()=>setOpenVideo(false)}
                aria-labelledby="customized-dialog-title"
                open={openVideo}
                maxWidth={'lg'}
            >
                <DialogContent dividers sx={{maxWidth: 700}}>
                    <Typography gutterBottom>
                        <video controls width="650">
                            <source src={video} type="video/mp4"/>
                        </video>

                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </section>
    )
}
