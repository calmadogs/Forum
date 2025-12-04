import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import {
    NewsContainer,
    MainContent,
    CreateNewsButton,
    ModalOverlay,
    ModalContent,
    InputGroup,
    Label,
    StyledInput,
    EditorContainer,
    ButtonGroup,
    CancelButton,
    PublishButton,
    NewsCard,
    NewsHeader,
    NewsTitle,
    NewsMeta,
    TagContainer,
    Tag,
    NewsContent
} from './News.style';

// Define modules and formats outside the component
const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }]
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background',
    'align'
];

interface NewsItem {
    id: number;
    title: string;
    content: string;
    tags: string; // Backend returns string
    created_at: string;
}

const News = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');
    const [news, setNews] = useState<NewsItem[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchNews = async (pageNum: number, append: boolean = false) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/api/news?page=${pageNum}&limit=5`);
            const { data, pagination } = response.data;

            if (append) {
                setNews(prev => [...prev, ...data]);
            } else {
                setNews(data);
            }

            setHasMore(pagination.page < pagination.totalPages);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(1);
    }, []);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchNews(nextPage, true);
    };

    const handleCreateNews = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Reset form
        setTitle('');
        setTags('');
        setContent('');
    };

    const handlePublish = async () => {
        if (!title.trim() || !content.trim()) {
            alert("Por favor, preencha o título e o conteúdo.");
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/news', {
                title,
                content,
                tags
            });

            // Refresh news list (reset to page 1)
            setPage(1);
            fetchNews(1, false);
            handleCloseModal();
        } catch (error) {
            console.error("Error creating news:", error);
            alert("Erro ao publicar notícia. Tente novamente.");
        }
    };

    // Helper to parse tags string to array
    const parseTags = (tagsString: string | undefined) => {
        if (!tagsString) return [];
        return tagsString.split(',').map(t => t.trim()).filter(t => t);
    };

    return (
        <NewsContainer>
            <Header />

            <MainContent>
                <CreateNewsButton onClick={handleCreateNews}>
                    + Publicar Notícia
                </CreateNewsButton>

                <div style={{ width: '100%', maxWidth: '800px' }}>
                    {news.length === 0 && !loading ? (
                        <div style={{ textAlign: 'center', color: '#6B7280', marginTop: '2rem' }}>
                            <h3>Nenhuma notícia publicada ainda.</h3>
                            <p>Seja o primeiro a compartilhar uma novidade!</p>
                        </div>
                    ) : (
                        <>
                            {news.map(item => (
                                <NewsCard key={item.id}>
                                    <NewsHeader>
                                        <NewsTitle>{item.title}</NewsTitle>
                                        <NewsMeta>
                                            <span>{new Date(item.created_at).toLocaleString()}</span>
                                        </NewsMeta>
                                        {item.tags && (
                                            <TagContainer>
                                                {parseTags(item.tags).map((tag, index) => (
                                                    <Tag key={index}>{tag}</Tag>
                                                ))}
                                            </TagContainer>
                                        )}
                                    </NewsHeader>
                                    <NewsContent dangerouslySetInnerHTML={{ __html: item.content }} />
                                </NewsCard>
                            ))}

                            {hasMore && (
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                                    <CreateNewsButton onClick={handleLoadMore} disabled={loading} style={{ backgroundColor: '#e5e7eb', color: '#374151' }}>
                                        {loading ? 'Carregando...' : 'Carregar Mais'}
                                    </CreateNewsButton>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </MainContent>

            {isModalOpen && (
                <ModalOverlay onClick={handleCloseModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>Nova Notícia</h2>

                        <InputGroup>
                            <Label htmlFor="news-title">Título da Notícia</Label>
                            <StyledInput
                                id="news-title"
                                type="text"
                                placeholder="Ex: Avanços na Reforma Tributária"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label htmlFor="news-tags">Tags (separadas por vírgula)</Label>
                            <StyledInput
                                id="news-tags"
                                type="text"
                                placeholder="Ex: Economia, Política, Brasil"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup>
                            <Label>Conteúdo</Label>
                            <EditorContainer>
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={setContent}
                                    modules={modules}
                                    formats={formats}
                                    placeholder="Escreva o conteúdo da notícia..."
                                />
                            </EditorContainer>
                        </InputGroup>

                        <ButtonGroup>
                            <CancelButton onClick={handleCloseModal}>Cancelar</CancelButton>
                            <PublishButton onClick={handlePublish}>Publicar</PublishButton>
                        </ButtonGroup>
                    </ModalContent>
                </ModalOverlay>
            )}

            <Footer />
        </NewsContainer>
    );
};

export default News;
