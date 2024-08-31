import React, { useState, useEffect, useCallback } from 'react';
import ReactJson from 'react-json-view';
import {  Edit2, Trash2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const initialState = {
  httpStatus: '200 - OK',
  name: '',
  contentType: 'application/json',
  charset: 'UTF-8',
  headers: '',
  body: '',
  secretToken: '',
  mockIdentifier: '',
  neverExpire: false,
};

const MockForm = ({ mock, setMock, onSubmit, isEditing, handleInputChange, handleSwitchChange }) => (
  <form onSubmit={(e) => onSubmit(e, isEditing)} className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="httpStatus">HTTP Status</Label>
        <Select name="httpStatus" value={mock.httpStatus} onValueChange={(value) => handleInputChange({ target: { name: 'httpStatus', value } }, setMock)}>
          <SelectTrigger id="httpStatus">
            <SelectValue placeholder="Select HTTP status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="200 - OK">200 - OK</SelectItem>
            <SelectItem value="201 - Created">201 - Created</SelectItem>
            <SelectItem value="404 - Not Found">404 - Not Found</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="name">Mock Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter Name for Mock"
          value={mock.name}
          onChange={(e) => handleInputChange(e, setMock)}
          required
        />
      </div>
      <div>
        <Label htmlFor="contentType">Response Content Type</Label>
        <Select name="contentType" value={mock.contentType} onValueChange={(value) => handleInputChange({ target: { name: 'contentType', value } }, setMock)}>
          <SelectTrigger id="contentType">
            <SelectValue placeholder="Select content type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="application/json">application/json</SelectItem>
            <SelectItem value="text/plain">text/plain</SelectItem>
            <SelectItem value="text/html">text/html</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div>
      <Label htmlFor="charset">Charset</Label>
      <Select name="charset" value={mock.charset} onValueChange={(value) => handleInputChange({ target: { name: 'charset', value } }, setMock)}>
        <SelectTrigger id="charset">
          <SelectValue placeholder="Select charset" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="UTF-8">UTF-8</SelectItem>
          <SelectItem value="ISO-8859-1">ISO-8859-1</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div>
      <Label htmlFor="headers">HTTP Headers</Label>
      <Textarea
        id="headers"
        name="headers"
        placeholder='{"X-Custom-Header": "Value"}'
        value={mock.headers}
        onChange={(e) => handleInputChange(e, setMock)}
      />
    </div>
    <div>
      <Label htmlFor="body">HTTP Response Body</Label>
      <Textarea
        id="body"
        name="body"
        placeholder='{"key": "value"}'
        value={mock.body}
        onChange={(e) => handleInputChange(e, setMock)}
        required
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label htmlFor="secretToken">Secret token (Optional)</Label>
        <Input
          id="secretToken"
          name="secretToken"
          placeholder="Enter secret token"
          value={mock.secretToken}
          onChange={(e) => handleInputChange(e, setMock)}
        />
      </div>
      <div>
        <Label htmlFor="mockIdentifier">Mock identifier (Optional)</Label>
        <Input
          id="mockIdentifier"
          name="mockIdentifier"
          placeholder="Enter mock identifier"
          value={mock.mockIdentifier}
          onChange={(e) => handleInputChange(e, setMock)}
        />
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <Switch
        id="neverExpire"
        checked={mock.neverExpire}
        onCheckedChange={(checked) => handleSwitchChange(checked, setMock)}
      />
      <Label htmlFor="neverExpire">Never expire</Label>
    </div>
    <Button type="submit" className="w-full">{isEditing ? 'UPDATE MY HTTP RESPONSE' : 'GENERATE MY HTTP RESPONSE'}</Button>
  </form>
);

const MemoizedMockForm = React.memo(MockForm);

export default function Dashboard() {
  const [mocks, setMocks] = useState([]);
  const [formState, setFormState] = useState(initialState);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [mockToDelete, setMockToDelete] = useState(null);
  const [expandedMockId, setExpandedMockId] = useState(null);
  const theme = localStorage.getItem('theme') || 'light';

const toggleExpand = (mockId) => {
  if (expandedMockId === mockId) {
    setExpandedMockId(null); // Colapsar si se hace clic en el mismo mock
  } else {
    setExpandedMockId(mockId); // Expandir el nuevo mock
  }
};


  useEffect(() => {
    setMocks([
      { id: '1', name: 'Aldeanos en', description: 'JSON data', date: '2024-07-26', contentType: 'application/json', httpStatus: '200 - OK', charset: 'UTF-8', headers: '{"X-Custom-Header": "Value"}', body: JSON.parse('{"key": "value"}'), secretToken: 'secret1', mockIdentifier: 'mock1', neverExpire: false },
      { id: '2', name: 'Aldeanos es', description: 'JSON data', date: '2024-07-26', contentType: 'application/json', httpStatus: '201 - Created', charset: 'UTF-8', headers: '{"X-Custom-Header": "Value2"}', body: JSON.parse('{"key2": "value2"}'), secretToken: 'secret2', mockIdentifier: 'mock2', neverExpire: true },
      { id: '3', name: 'c30bf7ea-f238-4956-a634-4a8ca5d196b8', description: 'JSON data', date: '2024-08-02', contentType: 'application/json', httpStatus: '404 - Not Found', charset: 'UTF-8', headers: '{"X-Custom-Header": "Value3"}', body: JSON.parse('{"key3": "value3"}'), secretToken: 'secret3', mockIdentifier: 'mock3', neverExpire: false },
    ]);
    document.title = 'Dashboard | Skydope API';
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSwitchChange = useCallback((checked) => {
    setFormState((prevState) => ({
      ...prevState,
      neverExpire: checked,
    }));
  }, []);

  const handleSubmit = useCallback((e, isEditing = false) => {
    e.preventDefault();
    const parsedBody = JSON.parse(formState.body); // Parsear el body antes de guardarlo

    if (isEditing) {
      setMocks((mocks) =>
        mocks.map((mock) => (mock.id === formState.id ? { ...formState, body: parsedBody } : mock))
      );
      setIsEditModalOpen(false);
    } else {
      setMocks((mocks) => [
        ...mocks,
        { ...formState, body: parsedBody, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] },
      ]);
      setFormState(initialState);
      setIsCreateModalOpen(false)
    }
  }, [formState]);


  const handleEdit = useCallback((mock) => {
    setFormState({
      ...mock,
      body: JSON.stringify(mock.body, null, 2) // Convierte el objeto JSON a cadena con sangría
    });
    setIsEditModalOpen(true);
  }, []);

  const handleDeleteClick = useCallback((mock) => {
    setMockToDelete(mock);
    setIsDeleteModalOpen(true);
  }, []);

 
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Dialog open={isCreateModalOpen} onOpenChange={(open) => setIsCreateModalOpen(open)}>
          <DialogTrigger asChild>
            <Button>NEW MOCK</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Design your mock</DialogTitle>
            </DialogHeader>
            <MemoizedMockForm
              mock={formState}
              setMock={setFormState}
              isEditing={false}
              handleInputChange={handleInputChange}
              handleSwitchChange={handleSwitchChange}
              onSubmit={handleSubmit}
            />
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
  <CardHeader>
    <CardTitle>Manage your mocks</CardTitle>
  </CardHeader>
  <CardContent>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mocks.map((mock) => (
          <React.Fragment key={mock.id}>
            <TableRow
              onClick={() => toggleExpand(mock.id)}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <TableCell>
                <div className="flex items-center">
                  <div className='flex flex-col gap-2'>
                  <span>{mock.name}</span>
                  <span className="outline text-xs font-medium mr-2 px-2.5 py-0.5 rounded max-w-[120px]">
                    {mock.httpStatus}
                  </span>
                  </div>
                  <span className="ml-2">
                    {expandedMockId === mock.id ? (
                      <ChevronUp strokeWidth={3} className="w-4 h-4" />
                    ) : (
                      <ChevronDown strokeWidth={3} className="w-4 h-4" />
                    )}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {mock.contentType}
                </span>
                {mock.description}
              </TableCell>
              <TableCell>{mock.date}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleEdit(mock); }}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleDeleteClick(mock); }}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon"> 
                    <ExternalLink className='h-4 w-4' onClick={() => window.open(`http://localhost:3000/${mock.id}`, '_blank')}/>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            {expandedMockId === mock.id && (
              <TableRow>
                <TableCell colSpan={4}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <ReactJson
                      src={mock.body}
                      name={false} // Para no mostrar el nombre del root
                      enableClipboard={false} // Para desactivar copiar al portapapeles
                      displayDataTypes={false} // Para no mostrar el tipo de datos
                      collapsed={false} // Para expandir por defecto
                      theme={theme === 'dark' ? 'summerfruit' : 'summerfruit:inverted'} // Cambia el tema dinámicamente
                    />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </CardContent>
</Card>
      {/* Dialogo para confirmar eliminación */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          {mockToDelete && <h3 className="text-lg font-semibold">{mockToDelete.name}</h3>}
          <p>Are you sure you want to delete this mock?</p>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setMocks(mocks.filter((mock) => mock.id !== mockToDelete.id));
                setIsDeleteModalOpen(false);
                setMockToDelete(null);
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditModalOpen} onOpenChange={(open) => {
        setIsEditModalOpen(open);
        if (!open) {
          setFormState(initialState); 
        }
      }}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
          <DialogTitle>Edit your mock {formState.name ? `(${formState.name})` : ''}</DialogTitle>
          </DialogHeader>
          <MemoizedMockForm
            mock={formState}
            setMock={setFormState}
            onSubmit={handleSubmit}
            isEditing={true}
            handleInputChange={handleInputChange}
            handleSwitchChange={handleSwitchChange}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
