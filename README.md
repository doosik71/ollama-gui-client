# 서비스 중지하하기

```bash
sudo systemctl stop ollama
```

## 서버로 실행하기

```bash
export OLLAMA_HOST=129.254.233.72:11434
ollama serve
systemctl status ollama
ollama pull mistral
ollama pull orca2
```

## 포트 허용하기

```bash
sudo ufw allow 3001
```

## 실행 확인하기

- <http://129.254.233.72:11434/>
