import { Box, Card, CardContent, CardMedia, Paper, Stack } from "@mui/material";
import { ArrowUpRight, Calendar1, Clock4 } from "lucide-react";
import { Link } from "react-router-dom";

const TrendingThisMonth = () => {
  return (
    <>
      <div className="trending-today">
        <div className="title-today">
          <h2>TrendingToday</h2>
        </div>
        <Stack
          spacing={3}
          direction={"row"}
          justifyContent={"center"}
          className="card-container"
        >
          <Card className="card">
            <CardMedia className="cardMedia">
              <img src="/images/pets.webp" alt="" />
            </CardMedia>
            <CardContent className="cardContent">
              <Box component={"div"} className="icons">
                <p>
                  <Calendar1 size="1.6rem" />
                  16/04/2025
                </p>
                <p>
                  <Clock4 size="1.6rem" />
                  10:00 am
                </p>
              </Box>
              <Box component={"div"} className="Title">
                <h3>hello</h3>
              </Box>
              <Box component={"div"} className="synopsis">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  architecto. Optio dolore sequi nobis mollitia odio distinctio?
                  Labore, similique harum.
                </p>
              </Box>
              <Link to="/blog" className="blog-Link">
                Read <ArrowUpRight />
              </Link>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia className="cardMedia">
              <img src="/images/astro.webp" alt="" />
            </CardMedia>
            <CardContent className="cardContent">
              <Box component={"div"} className="icons">
                <p>
                  <Calendar1 size="1.6rem" />
                  16/04/2025
                </p>
                <p>
                  <Clock4 size="1.6rem" />
                  10:00 am
                </p>
              </Box>
              <Box component={"div"} className="Title">
                <h3>hello</h3>
              </Box>
              <Box component={"div"} className="synopsis">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  architecto. Optio dolore sequi nobis mollitia odio distinctio?
                  Labore, similique harum.
                </p>
              </Box>
              <Link to="/blog" className="blog-Link">
                Read <ArrowUpRight />
              </Link>
            </CardContent>
          </Card>
          <Card className="card">
            <CardMedia className="cardMedia">
              <img src="/images/surgeon.webp" alt="" />
            </CardMedia>
            <CardContent className="cardContent">
              <Box component={"div"} className="icons">
                <p>
                  <Calendar1 size="1.6rem" />
                  16/04/2025
                </p>
                <p>
                  <Clock4 size="1.6rem" />
                  10:00 am
                </p>
              </Box>
              <Box component={"div"} className="Title">
                <h3>hello</h3>
              </Box>
              <Box component={"div"} className="synopsis">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                  architecto. Optio dolore sequi nobis mollitia odio distinctio?
                  Labore, similique harum.
                </p>
              </Box>
              <Link to="/blog" className="blog-Link">
                Read <ArrowUpRight />
              </Link>
            </CardContent>
          </Card>
        </Stack>
      </div>
    </>
  );
};

export default TrendingThisMonth;
