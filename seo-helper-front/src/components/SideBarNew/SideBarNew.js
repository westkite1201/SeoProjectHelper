import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import _ from 'lodash'
import { ListItemIcon } from '@material-ui/core';
import { Link, NavLink } from "react-router-dom";
import dashboardRoutes from '../../routes/dashboard.js'
const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, path, ...other } = props;

  return (
    <TreeItem
      label={
        <NavLink to ={path} style ={{color : 'black'}}>
          <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </div>
        </NavLink>
  
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function SideBarNew() {
  const classes = useStyles();
  /* 일단 하드 코딩으로 데이터 가져오도록 하자 */
  useEffect(() => {
    // 가져오기 dataPath로 정할까..?
    
  },[] );
  // let data = [{
  //   index: 1,
  //   depth: 1,
  //   parentNum: null,
  //   categoryName : 'A',
    
  //   sideView : true,
  //   icon: MailIcon,
  //   path: "/admin",
  //   component : ''
  // },{
  //   index: 2,
  //   depth: 1,
  //   parentNum: null,
  //   categoryName : 'B',
    
  //   sideView : false,
  //   icon: MailIcon,
  //   path: "/admin",
  //   component : ''
  // },{
  //   index: 3,
  //   depth: 1,
  //   parentNum: null,
  //   categoryName : 'C',

  //   sideView : true,
  //   icon: MailIcon,
  //   path: "/admin",
  //   component : ''
  // },
  // {
  //   index: 4,
  //   depth: 2,
  //   parentNum: 1,
  //   categoryName : 'D',

  //   sideView : false,
  //   icon: MailIcon,
  //   path: "/SideMyInfomation",
  //   component : ''
  // },
  // {
  //   index: 5,
  //   depth: 2,
  //   parentNum: 1,
  //   categoryName : 'E',

  //   sideView : true,
  //   icon: MailIcon,
  //   path: "/SideBarTest",
  //   component : ''
  // },
  // {
  //   index: 6,
  //   depth: 2,
  //   parentNum: 2,
  //   categoryName : 'F',

  //   sideView : true,
  //   icon: MailIcon,
  //   path: "/boardView",
  //   component : ''
  // }]
    function makeSideber(data){
        var result = _.chain(data)
                    .groupBy("depth")
                    .value();

        console.log("[SEO] RESULT", result)
      
        let depth2 = result[2];
        let sideBar = result[1].slice();
        sideBar.map(item =>{ 
            item.list = [] 
        })
        console.log('[SEO] SideBar ', sideBar)
        if(!_.isEmpty(depth2)){
          for(let i = 0 ; i < depth2.length; i++){
            let parent =  _.find(sideBar, {'index': depth2[i].parentNum })
              if(!_.isNil(parent)){
                  parent.list.push(depth2[i])
              }
            }
        }

        return sideBar;
    }
    //let sideBar = makeSideber(data);
    /* test */
    let sideBar = makeSideber(dashboardRoutes);
    //depth1 
    sideBar = sideBar.filter((item) =>{
      return item.sideView === true
    })
    let SideBarComponent = sideBar.map((depth1Item, key)=>{
      let subList = null;
        /* 나중에 reduce로 처리 
        */
       depth1Item.list = depth1Item.list.filter((item) =>{
          return item.sideView === true
        })
        if (depth1Item.list.length !== 0) {
          subList = depth1Item.list.map((data) => {
              return(
                <StyledTreeItem
                  key = {data.index}
                  path = {data.path} 
                  nodeId= {data.index.toString()}
                  labelText={data.sidebarName}
                  labelIcon={data.icon}
                  labelInfo="90"
                  color="#1a73e8"
                  bgColor="#e8f0fe"
              />
              )
            
          })
        }

        return(
          <StyledTreeItem nodeId = {depth1Item.index.toString()} 
                          labelText={depth1Item.sidebarName} 
                          labelIcon={depth1Item.icon}
                          path = {depth1Item.path}>
          
            {subList}
          </StyledTreeItem>
        )   
    })
  

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {SideBarComponent}
    </TreeView>
  );
}


