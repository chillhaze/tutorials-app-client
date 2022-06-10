import React, { useEffect, useState } from 'react';
import { Main } from './App.styled';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import TutorialsView from '../../views/TutorialsView/TutorialsView';
import DetailsView from '../../views/DetailsView/DetailsView';
import ManageTutorialsView from '../../views/ManageTutorialsView/ManageTutorialsView';
import TutorialsService from '../../service/tutorials.service';
import ITutorial from '../../interfaces/tutorial.interface';
import { useNavigate } from 'react-router-dom';
import EditForm from '../Form/EditForm';
import CreateForm from '../Form/CreateForm';
import IFormValues from '../../interfaces/formValues.interface';
const tutorialsService = new TutorialsService();

const App = () => {
  const [tutorials, setTutorials] = useState<ITutorial[] | null>(null);
  const [selectedItem, setSelectedItem] = useState<ITutorial | null>(null);
  const [itemToUpdate, setItemToUpdate] = useState<ITutorial | null>(null);
  const navigate = useNavigate();

  const getTutorials = async () => {
    const res = await tutorialsService.getTutorials();
    if (res) setTutorials(res);
  };

  useEffect(() => {
    if (!tutorials) {
      getTutorials();
    }
  }, [tutorials]);

  const handleItemSelect = (item: ITutorial | null, page: string) => {
    if (item && page === 'details') {
      setSelectedItem(item);
      navigate(`/details/${item.id}`);
    } else if (item && page === 'update') {
      setItemToUpdate(item);
      navigate(`/manage/update/${item.id}`);
    }
  };

  const handleFormSubmit = async (item: IFormValues, page: string) => {
    if (page === 'update') {
      await tutorialsService.updateTutorial(item);
      await getTutorials();
    } else if (page === 'create') {
      await tutorialsService.addTutorial(item);
      await getTutorials();
    }

    return navigate('/');
  };

  return (
    <Main>
      <Header setSelectedItem={setSelectedItem} getTutorials={getTutorials} />
      <MainContainer>
        <Routes>
          <Route
            path="/"
            element={
              <TutorialsView
                tutorials={tutorials}
                handleItemSelect={handleItemSelect}
              />
            }
          />

          <Route
            path="/details/:id"
            element={
              <DetailsView item={selectedItem} getTutorials={getTutorials} />
            }
          />

          <Route
            path="/manage"
            element={<ManageTutorialsView item={itemToUpdate} />}
          >
            {itemToUpdate && (
              <Route
                path="update/:id"
                element={
                  <EditForm
                    handleFormSubmit={handleFormSubmit}
                    item={{
                      title: itemToUpdate.title,
                      description: itemToUpdate.description,
                      published: itemToUpdate.published,
                      id: itemToUpdate.id,
                    }}
                    buttonLabel="Update"
                  />
                }
              />
            )}

            <Route
              path="create"
              element={
                <CreateForm
                  handleFormSubmit={handleFormSubmit}
                  buttonLabel="Create"
                />
              }
            />
          </Route>

          <Route path="*" element={<Navigate replace to={'/'} />} />
        </Routes>
      </MainContainer>
    </Main>
  );
};

export default App;
