import { Grid, Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

// Import logos
import Indi4logo from "../../assets/Company/Indi4logo.png";
import trivriddhi from "../../assets/Company/trivriddhi.png";
import whitecopper from "../../assets/Company/whitecopper.png";

const experiences = [
  {
    id: 1,
    company: "Indi4 Consult Pvt Ltd",
    company2: "Trivriddhi Tech Solutions LLP",
    role: "Full Stack Developer",
    duration: "Sep 2025 - Present",
    logo: Indi4logo,
    logo2: trivriddhi,
    description:
"A Full Stack Developer skilled in designing, developing, and deploying scalable web applications using modern front-end and back-end technologies. Experienced in building responsive user interfaces, secure APIs, and robust databases, with a strong focus on performance, usability, and clean architecture...",
    icon: <WorkIcon sx={{ fontSize: 40, color: '#c770f0' }} />,
  },
  
];

const experiences2 = [
    {
    id: 2,
    company: "White Copper Entertainment Pvt. Ltd.",
    role: "Managment Role",
    duration: "Jun 2024 - Aug 2025",
    logo: whitecopper,
    description:
      "At White Copper Entertainment Pvt. Ltd., a leading hospitality and events company with multiple hotel properties, I handled core guest-experience operations and internal management systemsMy responsibilities included -Managing end-to-end guest interactions to ensure smooth check-ins, check-outs, and overall hospitality experience.Maintaining and updating daily and weekly sales reports, helping the management team track revenue, occupancy, and performance metrics.Operating and overseeing 2–3 internal company software platforms used for employee workflows, bookings, and operational tracking.",
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: '#c770f0' }} />,
  },

];

export default function ExperienceSection() {
  return (
    <Box sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "white",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Professional <span style={{ color: "#c770f0" }}>Experience</span>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp) => (
          <Grid item xs={12} sm={10} md={5} key={exp.id}>
            <Card
              sx={{
                backgroundColor: "#1b1a2e",
                color: "white",
                boxShadow: "0 0 20px rgba(199, 112, 240, 0.3)",
                borderRadius: "16px",
                minHeight: "280px",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 0 30px rgba(199, 112, 240, 0.5)",
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={exp.logo}
                    alt={exp.company}
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#c770f0",
                      marginRight: 2,
                    }}
                  />
                  <Avatar
                    src={exp.logo2}
                    alt={exp.company2}
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#c770f0",
                      marginRight: 2,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#c770f0", fontWeight: "bold" }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle1">{exp.company}</Typography>
                    <Typography variant="subtitle1">{exp.company2}</Typography>
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      {exp.duration}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "justify",
                    mt: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {exp.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}


        {experiences2.map((exp2) => (
          <Grid item xs={12} sm={10} md={5} key={exp2.id}>
            <Card
              sx={{
                backgroundColor: "#1b1a2e",
                color: "white",
                boxShadow: "0 0 20px rgba(199, 112, 240, 0.3)",
                borderRadius: "16px",
                minHeight: "280px",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 0 30px rgba(199, 112, 240, 0.5)",
                },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={exp2.logo}
                    alt={exp2.company}
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#c770f0",
                      marginRight: 2,
                    }}
                  />
                   
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#c770f0", fontWeight: "bold" }}
                    >
                      {exp2.role}
                    </Typography>
                    <Typography variant="subtitle1">{exp2.company}</Typography>
                    
                    <Typography variant="caption" sx={{ color: "gray" }}>
                      {exp2.duration}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "justify",
                    mt: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {exp2.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
