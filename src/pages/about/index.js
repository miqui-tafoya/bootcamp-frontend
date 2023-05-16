import PageDescription from "@/components/PageDescription";
import { Grid, Button, Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function AboutPage({ skills }){
    const router = useRouter();

    return (
        <section>
        <PageDescription
        title="About Me"
        description="Lorem ipsum"
        />
        <Grid container spacing={2}>
        <Grid item md={6}>
            <h2>Get to know me</h2>
            <p>I'm a frontend dude</p>
            <Button 
                variant="contained"
                size="large"
                onClick={() => router.push("/contact")}
            >
                Contact
            </Button>
        </Grid>
        <Grid item md={6}>
            <h2>My Skills</h2>
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            {skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        </Grid>
      </Grid>
        </section>
    );
}

export async function getStaticProps() {
    let skills = [];
  
    try {
      const response = await fetch(
        "https://mi-test-97aaf-default-rtdb.firebaseio.com/skills.json"
      );
      const data = await response.json();
      skills = data.split(",");
    } catch (error) {
      console.error(error);
    }
  
    return {
      props: {
        skills,
      },
      revalidate: 30,
    };
  }