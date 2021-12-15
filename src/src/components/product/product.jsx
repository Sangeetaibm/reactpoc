import react from 'react'
import Grid from '@material-ui/core'

const products = () => {
    return (
    <Grid container justify= "centre" spacing={4}>
    {product.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <prpduct/>
        </Grid>)
)}
    </Grid>
    )}