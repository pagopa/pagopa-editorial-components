import { Box, Divider, Typography, Link } from "@mui/material";
import EContainer from "../EContainer";

interface ListingItem {
  text: string,
  href?: string,
  htmlTitle?: string,
  isLast?: boolean
}

export interface ListingsProps {
  title: string,
  date: {
    preDate?: string,
    date: Date,
    locale?: string,
    options: Intl.DateTimeFormatOptions,
  }
  name: string,
  items: ListingItem[]
}

const ListingItem = (props: ListingItem) => {
  const { text, htmlTitle = '', href, isLast = false } = props;
  return (
    <Box mb={ isLast ? 0 : 2}>
      {
        href ? (
          <Link
            href={href}
            target="_blank"
            mb={2}
            variant="body2"
            fontWeight={600}
            title={htmlTitle}>
            {text}
          </Link>
        ) : (
          <Typography
            fontWeight={600}
            mb={2}
            variant="body2"
            title={htmlTitle}>
            {text}
          </Typography>
        )
      }
      <Divider sx={{ marginTop:  '16px' }}/>
    </Box>
  )
}

const Listing = (props: ListingsProps) => {
    const { 
      title,
      date: {
        preDate,
        date,
        locale,
        options
      },
      name = '', items
    } = props;
    return (
      <EContainer py={4} background='background.paper' direction='column'>
        <Typography variant='h5' mb={2}>
          {title}
        </Typography>
        <Typography
          color='text.secondary'
          fontSize={12}
          fontWeight={600}
          mb={5}>
          {
            `${preDate} ${new Intl
              .DateTimeFormat(locale, options)
              .format(date)}`
          }
        </Typography>
        <Typography
          color='text.secondary'
          fontSize={14}
          fontWeight={700}
          mb={2}
          textTransform='uppercase'>
            {name}
          </Typography>
        {
          items.map( (props, i) =>
            <ListingItem
              key={`${props.text}-${i}`}
              { ...props }
              isLast={items.length === i+1 }/>)
        }
      </EContainer>
    )
}

export default Listing;
