import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AddListing } from './AddListing'

describe('<AddListing />', () => {
  let component = null
  const listing = [{ id: 1, title: 'title', languages: [{ name: 0, required: 2 }, { name: 1, required: 1 }], jobTitle: 'jobTitle', description: 'description', amount: '1', basis: '2', from: '2017-8', to: '2017-12', minDegreeLevel: '1', minDegreeImportance: '2', minExperienceImportance: '1', minExperienceLevel: '5', listingId: 1, published: false, status: 2, driversLicenseImportance: 1, skills: [1, 2], onSiteImportance: 0 },
  { id: 2, title: 'second', languages: [{ name: 0, required: 2 }, { name: 1, required: 1 }], jobTitle: 'tester', description: 'fun', amount: '2', basis: '3', from: '2018-02', to: '2018-05', minDegreeLevel: '2', minDegreeImportance: '1', minExperienceImportance: '2', minExperienceLevel: '3', listingId: 2, published: false, status: true, driversLicenseImportance: 0, skills: [3, 4], onSiteImportance: 1 }]
  let testFunc0 = jest.fn()
  let testFunc1 = jest.fn()
  let testFunc2 = jest.fn()

  const props = {
    match: { params: { id: 1 } },
    params: {},
    skills: [ 1, 2 ],
    languages: [{ name: 0, required: 2 }, { name: 1, required: 1 }],
    companyListings: listing,
    deleteListing: testFunc2,
    editListing: testFunc0,
    newListing: testFunc1
  }

  beforeEach(() => {
    component = shallow(<AddListing {...props} />)
  })

  it('renders', () => {
    expect(toJson(component)).toMatchSnapshot()
  })

  it('change props', () => {
    props.params = { id: 2 }
    props.match.params.id = 2
    props.skills = [1, 2, 3]
    props.companyListings[1].from = null
    props.companyListings[1].to = null
    props.companyListings[1].onSiteImportance = 2
    props.companyListings[1].driversLicenseImportance = 2
    props.companyListings[1].minDegreeImportance = 0
    props.companyListings[1].minDegreeLevel = 0
    props.companyListings[1].minExperienceImportance = 0
    props.companyListings[1].minExperienceLevel = 0
    props.companyListings[1].status = false

    component.setProps(...props)
    expect(toJson(component)).toMatchSnapshot()
  })

  it('change the title field', () => {
    component.find('#listingTitle').simulate('change', { target: { value: 'listingTitle' } })
    expect(component.state().title).toBe('listingTitle')
  })

  it('change the jobTitle field', () => {
    component.find('#jobTitle').simulate('change', { target: { value: 'testJobTitle' } })
    expect(component.state().jobTitle).toBe('testJobTitle')
  })

  it('change the description field', () => {
    component.find('#description').simulate('change', { target: { value: 'testDescription' } })
    expect(component.state().description).toBe('testDescription')
  })

  it('change the amount field', () => {
    component.find('#amount').simulate('change', { target: { value: 'testAmount' } })
    expect(component.state().amount).toBe('testAmount')
  })

  it('change the basis field', () => {
    component.find('#basis').simulate('change', { target: { value: 'testBasis' } })
    expect(component.state().basis).toBe('testBasis')
  })

  it('change the apply by field', () => {
    component.find('#applyBy').simulate('change', { target: { value: '2017-12' } })
    expect(component.state().start).toBe('2017-12')
  })

  it('change the start by field', () => {
    component.find('#startBy').simulate('change', { target: { value: '2018-01' } })
    expect(component.state().end).toBe('2018-01')
  })

  it('checks the demands boxes', () => {

    component.find('#box1').simulate('change', { target: { checked: true } })
    component.find('#box2').simulate('change', { target: { checked: true } })
    component.find('#box3').simulate('change', { target: { checked: true } })
    component.find('#box5').simulate('change', { target: { checked: true } })
    component.find('#box6').simulate('change', { target: { checked: true } })

    expect(component.state().box2).toBe(true)
    expect(component.state().box1).toBe(true)
    expect(component.state().box3).toBe(true)
    expect(component.state().box5).toBe(true)
    expect(component.state().box5).toBe(true)

  })

  it('change min degree level and importance', () => {

    component.find('#box1').simulate('change', { target: { checked: true } })
    component.find('#minDegreeLevel').simulate('change', { target: { value: 'PhD' } })
    expect(component.state().minDegreeLevel).toBe('PhD')

    component.find('#minDegreeImportance').simulate('change', { target: { value: 'Nice' } })
    expect(component.state().minDegreeImportance).toBe('Nice')

  })

  it('change min exoerience level and importance', () => {

    component.find('#box2').simulate('change', { target: { checked: true } })
    component.find('#minExperienceLevel').simulate('change', { target: { value: '3' } })
    expect(component.state().minExperienceLevel).toBe('3')

    component.find('#minExperienceImportance').simulate('change', { target: { value: 'Need' } })
    expect(component.state().minExperienceImportance).toBe('Need')

  })

  it('add a language', () => {
    let langs = component.state().languages.length

    component.find('#box3').simulate('change', { target: { checked: true } })
    component.find('#addLanguagesButton').simulate('click')

    expect(component.state().languages.length).toBe(langs + 1)

  })

  it('change On-site radio buttons', () => {
    component.find('#box5').simulate('change', { target: { checked: true } })

    component.find('#radio5Yes').simulate('change')
    expect(component.state().radio5).toBe('yes')

    component.find('#radio5No').simulate('change')
    expect(component.state().radio5).toBe('no')

  })

  it('change Drivers license radio buttons', () => {
    component.find('#box6').simulate('change', { target: { checked: true } })

    component.find('#radio6Yes').simulate('change')
    expect(component.state().radio6).toBe('yes')

    component.find('#radio6No').simulate('change')
    expect(component.state().radio6).toBe('no')

  })

  it('clicking on the save button', () => {
    let calledParams = [1, 'title', 'jobTitle', 'description', 2, 1, '2017-8', '2017-12', 0, 1, 1, 2, 5, 1, [ { name: 0, required: 2 }, { name: 1, required: 1 }], [1, 2], false]

    component.find('#saveButton').simulate('click')
    component.setProps({ params: { id: 1 }, match: { params: { id: 1 } } })
    component.find('#saveButton').simulate('click')
    expect(testFunc0).toBeCalledWith(...calledParams)

  })

  it('clicking the cancel button', () => {
    global.confirm = () => true
    component.find('#cancelButton').simulate('click')
    expect(testFunc2).toBeCalledWith(2)
  })


})

/*
TODO
component.find('#saveButton').simulate('click')
component.instance().save()
component.instance().componentWillReceiveProps({companyListings: [{listing}], match: { params: {id: 1} } })
component.instance().button()

component.find('#publishButton').simulate('click')
component.find('#unpublishButton').simulate('click')
component.find('#saveButton').simulate('click')
component.find('#hireButton').simulate('click')
component.find('#cancelButton').simulate('click')
*/
