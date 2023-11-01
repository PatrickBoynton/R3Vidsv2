import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { IconStyles } from '../../utils/styles'
import Icon from './Buttons/Icon'
import useVideoApiStore from '../../videoApiStore'

const SearchBox = () => {
  const navigate = useNavigate()
  const { keyword: urlKeyword } = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')
  const getVideos = useVideoApiStore(state => state.getVideos)
  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search?title=${keyword}`)
      getVideos(keyword)
      setKeyword('')
    } else {
      navigate('/')
      getVideos(keyword)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="search"
        label="Search for a Video"
        variant="outlined"
        value={keyword}
        placeholder="Search"
        onChange={e => setKeyword(e.target.value)}
        size="small"
      />
      <Icon icon={<SearchIcon sx={IconStyles} />} type="submit" />
      <Icon
        icon={<ClearIcon sx={IconStyles} />}
        onClick={() => {
          navigate('/')
          setKeyword('')
        }}
      />
    </form>
  )
}

export default SearchBox
