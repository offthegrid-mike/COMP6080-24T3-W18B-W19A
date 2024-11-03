import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';



import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material'; 

const CoffeeCard = () => {
  const [user, setUser] = useState({})
  const [displayValue, setDisplayValue] = useState("")
  const [tab, setTab] = useState("name")

  const valueMap = {
    name: "name",
    email: "email address",
    dob: "date of birth",
    address: "address"
  }

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
  }, [])

  useEffect(() => {
    if (Object.keys(user).length === 0) return

    let value = ""
    if (tab === "name") {
      value = `${user.name.first} ${user.name.last}`
    } else if (tab === "email") {
      value = user.email
    } else if (tab === "dob") {
      value = user.dob.date
    } else if (tab === "address") {
      value = `${user.location.street.number} ${user.location.street.name}`
    }

    setDisplayValue(value)
  }, [user, tab])

  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={user.picture?.large}
            title="green iguana"
            component='img'
        />
        <CardContent>
          <Typography variant="h6">
                Your {valueMap[tab]} is
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              { displayValue }
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton color={tab === "name" ? "primary" : "default"} onClick={() => setTab("name")}><PersonIcon /></IconButton>
            <IconButton color={tab === "email" ? "primary" : "default"} onClick={() => setTab("email")}><EmailIcon /></IconButton>
            <IconButton color={tab === "dob" ? "primary" : "default"} onClick={() => setTab("dob")}><CalendarMonthIcon /></IconButton>
            <IconButton color={tab === "address" ? "primary" : "default"} onClick={() => setTab("address")}><MapIcon /></IconButton>
          </Stack>
        </CardContent>
    </Card>
  )
}

export default CoffeeCard