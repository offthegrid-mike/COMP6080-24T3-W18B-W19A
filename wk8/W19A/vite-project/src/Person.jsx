import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useState, useEffect } from 'react';

const Person = () => {
    const [user, setUser] = useState({})
    const [tab, setTab] = useState("name")
    const [display, setDisplay] = useState("")

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => setUser(data.results[0]))
    }, [])

    useEffect(() => {
        if (tab === "name")
            setDisplay(`${user.name?.first} ${user.name?.last}`)
        else if (tab === "email")
            setDisplay(user.email)
    }, [user, tab])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://randomuser.me/api/portraits/men/0.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          My Name is
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {display}
        </Typography>
      </CardContent>
      <IconButton aria-label="delete" color={tab === "name" ? "success" : "default"} onMouseEnter={() => setTab("name")}>
        <PersonIcon />
    </IconButton>
    <IconButton aria-label="delete" color={tab === "email" ? "success" : "default"} onMouseEnter={() => setTab("email")}>
        <EmailIcon />
    </IconButton>
    </Card>
  )
}

export default Person