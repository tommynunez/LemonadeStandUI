import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
    archives: ReadonlyArray<{
        url: string;
        title: string;
    }>;
    description: string;
    social: ReadonlyArray<{
        icon: React.ElementType;
        name: string;
    }>;
    title: string;
}

export default function Sidebar(props: SidebarProps) {
    const { archives, description, social, title } = props;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
        </Grid>
    );
}