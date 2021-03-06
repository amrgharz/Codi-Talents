import React, { Component } from 'react';
import { Button, Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import { Nav, ButtonGroup,NavItem, Tab,  } from 'react-bootstrap';
// import FilterStudents from './filterStudents';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const create_student = (name, availability, skills, favorite,likesteamwork,city,image) => 
{ return { 
    name, 
    availability,
    skills,
    favorite,
    likesteamwork,
    city
  }
}



const students = [
  create_student('Adam', '3', 'PHP', 'Reading', 'yes'     ,'beirut'),
  create_student('mostafa', '1', 'PHP', 'Reading', 'yes'     ,'beirut'),
  create_student('ninja', '2', 'PHP', 'Reading', 'yes'     ,'saida'),
  create_student('pirate', '3', 'PHP', 'Reading', 'yes'     ,'jbeil'),
  create_student('mimi', 'available', 'PHP', 'Reading', 'yes'     ,'beirut'),
  create_student('Ahmad', '2', 'REACT', 'Sport', 'yes'  ,'saida'),
  create_student('Amjad', 'available', 'HTML', 'Swimming', 'yes','tripoli'),
  create_student('Hala', 'available', 'javascript', 'Reading', 'yes'    ,'jounyeh'),
  create_student('Rami', 'available', 'WORDPRESS', 'Sport', 'yes'   ,'jbeil'),
  create_student('Rima', '1', 'LARAVEL', 'Walking', 'yes'  ,'tyre')
]
const Student = ({name,availability,skills,favorite,likesteamwork,image,city}) => (
  <Col xs={1} md={4}>
    <Thumbnail >
      {/* <Image src={image} width="150px" height="150px" circle /> */}
      <div className='student-image' style={ {backgroundImage:`url(${image})`} } > </div>
      <h2>{name}</h2>
      <h3>City: {city}</h3>
      <h3>Availability: </h3>
      <p>{availability} months</p>
      <h3>Skills: </h3>
      <p>{skills}</p>
      <hr />
      <p>{favorite}</p>
      <p>Likes Team Work: {likesteamwork}</p>
      <p>
        <Button bsStyle="primary">See More</Button>&nbsp;
      <Button bsStyle="success">Add to list</Button>
      </p>
    </Thumbnail>
  </Col>
)

class StudentTalent extends Component {
  state = {
    cityFilter: "",
    skillFilter:"",
    availableFilter:""
  };
 renderStudents() {
    const city = this.state.cityFilter;
    const skill = this.state.skillFilter;
    const availabile = this.state.availableFilter;
    
    if(city){
      return (
        students.filter( student=>student.city ===  city).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }
    else if(skill){
      return (
        students.filter( student=>student.skills ===  skill).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }else if(availabile){
      return (
        students.filter( student=>student.availability ===  availabile).map(
        (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
    }else{
      return (
        students.map(
          (student) => <Student image={'/images/'+student.name+'.jpeg'} {...student} key={student.name}/> )
      )
  }
    
 }
//  onChange = (evt) => {
//   const input = evt.target;
//   const cityFilter = input.value;
//   this.setState({ cityFilter });
// }
 setCityFilter = (cityFilter) => {
   this.setState({ cityFilter, skillFilter:'', availableFilter:'' })
  };
setSkillFilter = (skillFilter) => {
   this.setState({ skillFilter, availableFilter:'', cityFilter:'' })
  };
  setAvailabileFilter = (availableFilter) => {
    this.setState({ availableFilter, cityFilter:'', skillFilter:'' })
   };
  render() {
    const students_list = this.renderStudents()

    return (
      <div>
        <div class="filter">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={4}>
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">Places</NavItem>
        <NavItem eventKey="second">Skills</NavItem>
        <NavItem eventKey="third">Availability</NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content animation>
        <Tab.Pane eventKey="first">
            <ButtonGroup vertical block>
                <Button onClick={() => this.setCityFilter("beirut")}>Beirut</Button>
                <Button onClick={() => this.setCityFilter("saida")}>Saida</Button>
                <Button onClick={() => this.setCityFilter("tripoli")}>Tripoli</Button>
                <Button onClick={() => this.setCityFilter("jounyeh")}>Jounyeh</Button>
                <Button onClick={() => this.setCityFilter("jbeil")}>Jbiel</Button>
                <Button onClick={() => this.setCityFilter("tyre")}>Tyre</Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <ButtonGroup vertical block>
                <Button onClick={() => this.setSkillFilter("PHP")}>PHP</Button>
                <Button onClick={() => this.setSkillFilter("REACT")}>REACT</Button>
                <Button onClick={() => this.setSkillFilter("WORDPRESS")}>WORDPRESS</Button>
                <Button onClick={() => this.setSkillFilter("DRUPAL")}>DRUPAL</Button>
                <Button onClick={() => this.setSkillFilter("LARAVEL")}>LARAVEL</Button>
                <Button onClick={() => this.setSkillFilter("NODE")}>NODE JS</Button>
                <Button onClick={() => this.setSkillFilter("javascript")}>JAVASCRIPT</Button>
            </ButtonGroup>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <ButtonGroup vertical block>
                <Button onClick={() => this.setAvailabileFilter("available")}>Available</Button>
                <Button onClick={() => this.setAvailabileFilter("1")}>In less than 1 month</Button>
                <Button onClick={() => this.setAvailabileFilter("2")}>In less than 2 month</Button>
                <Button onClick={() => this.setAvailabileFilter("3")}>3months or more</Button>
            </ButtonGroup>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </div>
  <button onClick={this.handleAdd}>Add Item</button>
    <Grid>
      <Row>
        <ReactCSSTransitionGroup transitionName={"student"} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          { students_list.length ? students_list : <div>no results...</div> }
        </ReactCSSTransitionGroup>
      </Row>
    </Grid>
    </div>
)
  }
}

class talentPage extends Component {
  render() {
    return (
      <div>
      {/* <FilterStudents /> */}
      <StudentTalent />
      </div>
)
  }
}

export default talentPage;