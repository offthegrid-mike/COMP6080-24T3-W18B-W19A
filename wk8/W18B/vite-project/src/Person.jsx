import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';

const Person = () => {
    const [user, setUser] = useState({name: {first: "", last: ""}, email: ""})
    const [tab, setTab] = useState("name")
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0])
        setTab("name")
      })
    }, [])

    useEffect(() => {
        if (tab === "name") {
            setDisplayText(`${user.name.first} ${user.name.last}`)
        }
        else if (tab === "email")
        {
            setDisplayText(user.email)
        }
    }, [user, tab])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={user.picture?.large}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          My {tab} is
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {displayText}
        </Typography>
        <IconButton size="small" color='success' onMouseEnter={() => setTab("name")}>
            <PersonIcon />
        </IconButton >
        <IconButton  size="small" onMouseEnter={() => setTab("email")}>
            <EmailIcon />
        </IconButton >
      </CardContent>
    </Card>
  )
}

export default Person